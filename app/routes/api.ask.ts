import type { ActionFunctionArgs } from '@remix-run/node';
import { makeProfileQAChain } from '@/features/terminal/model/make-profile-qa-chain';
import {
  extractContentFromLangChainResponse,
  createStandardResponse,
  createErrorResponse,
  validateRequestMethod,
  validateQuestion,
  validateEnvironmentVariable,
} from '@/shared/lib/api';
import { HTTP_STATUS } from '@/shared/constants';

export async function action({ request }: ActionFunctionArgs) {
  try {
    // Validate request method
    if (!validateRequestMethod(request, 'POST')) {
      return Response.json(createErrorResponse('Method not allowed'), {
        status: HTTP_STATUS.METHOD_NOT_ALLOWED,
      });
    }

    // Parse and validate request body
    const body = await request.json();
    const question = validateQuestion(body);

    // Validate environment variable
    const apiKey = validateEnvironmentVariable(
      process.env.OPENAI_API_KEY,
      'OpenAI API key'
    );

    // Process the request
    const result = await makeProfileQAChain(apiKey, question);
    const content = extractContentFromLangChainResponse(result);

    return Response.json(createStandardResponse(content));
  } catch (error) {
    console.error('API error:', error);
    const errorResponse = createErrorResponse(error);

    // Determine status code based on error type
    let status: number = HTTP_STATUS.INTERNAL_SERVER_ERROR; // Default to 500 for internal errors

    if (error instanceof Error) {
      if (error.message.includes('not configured')) {
        status = HTTP_STATUS.INTERNAL_SERVER_ERROR; // Configuration errors are 500
      } else if (
        error.message.includes('Question is required') ||
        error.message.includes('Question must be a string') ||
        error.message.includes('Request body is required')
      ) {
        status = HTTP_STATUS.BAD_REQUEST; // Validation errors are 400
      }
    }

    return Response.json(errorResponse, { status });
  }
}
