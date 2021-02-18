const gridExamples: Record<string, string> = {
  "Correct": `"a a ."
"a a ."
". b c";`,
  "Not Rectangular": `'header header header header header header'
'menu main main main right right'
'menu footer footer footer footer';`,
  "Not Contiguous": `"header header header header"
"main main . sidebar"
"footer footer footer header";`
}

export default gridExamples