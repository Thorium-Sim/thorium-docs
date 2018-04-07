function checkCrate() {
  if (window.Crate) {
    return new Crate({
      server: "390968011605147648",
      channel: "391235306663182337"
    });
  }
  setTimeout(checkCrate, 50);
}
checkCrate();
