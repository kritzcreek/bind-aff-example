exports.oToAffImpl = (o) => (onError, onSuccess) => {
  o.onSuccess(onSuccess).onError(onError);
  return (cancelError, cancelerError, cancelerSuccess) => {
    // Handle however you'd cancel the `o` (if the API supports it)
  }
}
