function checkCrate() {
  if (window.Crate) {
    const crate = new Crate({
      server: "390968011605147648",
      channel: "391235306663182337"
    });
    return;
  }
  setTimeout(checkCrate, 50);
}

checkCrate();
