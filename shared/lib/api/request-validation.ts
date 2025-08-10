/**
 * Validates that a request has the correct method.
 *
 * @param request - The request to validate
 * @param expectedMethod - The expected HTTP method
 * @returns true if the method matches, false otherwise
 */
export const validateRequestMethod = (
  request: Request,
  expectedMethod: string
): boolean => {
  return request.method === expectedMethod;
};

/**
 * Validates that the request body contains a valid question.
 *
 * @param body - The parsed request body
 * @returns The validated question string
 * @throws Error if validation fails
 */
export const validateQuestion = (body: unknown): string => {
  if (!body || typeof body !== 'object') {
    throw new Error('Request body is required');
  }

  const requestBody = body as { question?: unknown };

  if (!requestBody.question) {
    throw new Error('Question is required');
  }

  if (typeof requestBody.question !== 'string') {
    throw new Error('Question must be a string');
  }

  return requestBody.question;
};

/**
 * Validates that an environment variable is set.
 *
 * @param value - The environment variable value
 * @param name - The name of the environment variable for error messages
 * @returns The validated value
 * @throws Error if the environment variable is not set
 */
export const validateEnvironmentVariable = (
  value: string | undefined,
  name: string
): string => {
  if (!value) {
    throw new Error(`${name} not configured`);
  }
  return value;
};
