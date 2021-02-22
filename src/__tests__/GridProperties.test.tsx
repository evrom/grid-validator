import React from "react";
import { render } from "@testing-library/react";
import GridProperties from "../GridProperties";
import gridExamples from "../gridExamples";
import CssGridTemplateAreas from "../CssGridTemplateAreas";

it("GridProperties renders successfully", () => {
  const propertyValue: string = gridExamples["Correct"];
  const cgta: CssGridTemplateAreas = new CssGridTemplateAreas(propertyValue);
  render(
    <GridProperties
      rows={cgta.rows()}
      isRectangular={cgta.isRectangular()}
      columnsPerRow={cgta.columnsPerRow()}
      nonContigousAreas={cgta.findNotContiguous()}
    />
  );
});
