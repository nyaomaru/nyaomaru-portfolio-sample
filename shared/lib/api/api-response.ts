/**
 * Type definitions for LangChain response structures
 */
export type LangChainResponse = {
  kwargs?: {
    content?: string;
  };
  content?: string;
  [key: string]: unknown;
};

/**
 * Standard API response structure
 */
export type StandardApiResponse = {
  result: {
    kwargs: {
      content: string;
    };
  };
};

/**
 * Error response structure
 */
export type ErrorResponse = {
  error: string;
};

/**
 * Extracts content from various LangChain response structures in a type-safe manner.
 *
 * @param response - The response from LangChain
 * @returns The extracted content string
 * @throws Error if content cannot be extracted
 */
export const extractContentFromLangChainResponse = (
  response: unknown
): string => {
  if (response === null || response === undefined) {
    throw new Error(
      'No content could be extracted: response is null or undefined'
    );
  }
  if (typeof response !== 'object') {
    return String(response);
  }

  const responseObj = response as LangChainResponse;

  // Try to extract content from kwargs.content
  if (responseObj.kwargs?.content) {
    return String(responseObj.kwargs.content);
  }

  // Try to extract content directly
  if (responseObj.content) {
    return String(responseObj.content);
  }

  // Fallback: log the full object, but return a generic message to the user
  console.error(
    'Unable to extract content from LangChain response:',
    responseObj
  );
  return 'Unable to extract content';
};

/**
 * Creates a standardized API response with proper error handling.
 *
 * @param content - The content to include in the response
 * @returns Standardized API response
 */
export const createStandardResponse = (
  content: string
): StandardApiResponse => {
  return {
    result: {
      kwargs: {
        content,
      },
    },
  };
};

/**
 * Creates an error response with proper error handling.
 *
 * @param error - The error to include in the response
 * @returns Error response
 */
export const createErrorResponse = (error: unknown): ErrorResponse => {
  const errorMessage = error instanceof Error ? error.message : String(error);
  return { error: errorMessage };
};
