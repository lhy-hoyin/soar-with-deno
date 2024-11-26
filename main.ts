function foo(s: any): any {
  return "foo"
}

if (import.meta.main) {
  let foobar = "bar";
  const barsoap = 0;
  console.log(foo("foo"), foobar);
}
