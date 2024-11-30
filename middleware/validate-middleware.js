const validate = (signupSchema) => async (req, res, next) => {
  try {
    const parseBody = await signupSchema.parseAsync(req.body);
    req.body = parseBody;
    console.log(req.body);
    next();
  } catch (err) {
    const message = err.issues[0].message;
    res.status(400).json({ message });
  }
};
module.exports = validate;
