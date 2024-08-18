for (let i = 0; i < 5000; i++) {
  fit("works", () => {
    for (let j = i * 5; j > 0; j--) document.createElement("div");
    expect(true).toBe(true);
  });
}

for (let i = 0; i < 5000; i++) {
  it("also works", () => {
    expect(true).toBe(true);
  });
}
