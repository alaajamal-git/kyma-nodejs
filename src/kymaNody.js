module.exports = {
    main: async function (event, context) {
      const message = `Hello World 2`
        + ` from the Kyma Function ${context["function-name"]}`
        + ` running on ${context.runtime}!`;
      console.log(message);
      return message;
    }
  }