fit('works', () => {
  expect(true).toBe(true);
})

for (let i = 0; i < 4000; i++) {
  it('also works', () => {
    expect(true).toBe(true);
  })
}
