module.exports = {
    main: async function (event, context) {
      const message = `Hello World 22`
        + ` from the Kyma Function ${context["function-name"]}`
        + ` running on ${context.runtime}!`;
      console.log(message);
      return message;
    }
  }