function handleFatalError(error) {
  console.error(error); // eslint-disable-line no-console

  return 1;
}

function handleSoftErrors(errors) {
  return errors.map(
    (error) => console.log(error) // eslint-disable-line no-console
  );
}

function handleWarnings(warnings) {
  warnings.map(
    (warning) => console.log(warning) // eslint-disable-line no-console
  );
}

export default function handleBuildData(error, stats) {
  if (error) {
    return handleFatalError(error);
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return handleSoftErrors(jsonStats.errors);
  }

  if (jsonStats.hasWarnings) {
    handleWarnings(jsonStats.warnings);
  }

  // eslint-disable-next-line no-console
  console.log(stats.toString({
    colors: true,
    chunks: false,
  }));

  return 0;
}
