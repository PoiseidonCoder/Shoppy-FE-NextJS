const formatErrorMessage = (message: string): string => {
  return message.charAt(0).toUpperCase() + message.slice(1);
};
const getErrorMessage = (response: any) => {
  if (response.message) {
    if (Array.isArray(response.message)) {
      return formatErrorMessage(response.message[0]);
    }
    return formatErrorMessage(response.message);
  }
  return "An unknown error occurred.";
};
export default getErrorMessage;
