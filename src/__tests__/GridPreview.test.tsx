import React from "react";
import { render } from "@testing-library/react";
import GridPreview from "../GridPreview";
import gridExamples from "../gridExamples";
import CssGridTemplateAreas from "../CssGridTemplateAreas";

it("App renders successfully", () => {
  const propertyValue: string = gridExamples["Correct"];
  const grid: CssGridTemplateAreas = new CssGridTemplateAreas(propertyValue);
  render(
    <GridPreview
      namedAreas={grid.namedAreas}
      propertyValue={grid.propertyValue}
    />
  );
});
