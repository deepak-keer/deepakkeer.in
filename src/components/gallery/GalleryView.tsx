"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <MasonryGrid
      columns={4}
      s={{ columns: 2 }}
      style={{ gridAutoRows: "auto" }}
    >
      {gallery.images.map((image, index) => {
        // Define which items span multiple columns/rows for the layout
        let colSpan = 1;
        let rowSpan = 1;

        // Layout pattern: small-small-large-large | large-medium-medium | small-small | large
        const layoutPattern = [
          { cols: 2, rows: 1 }, // 0: top-left small horizontal
          { cols: 2, rows: 2 }, // 1: top-right large vertical
          { cols: 2, rows: 1 }, // 2: middle-left small horizontal
          { cols: 2, rows: 1 }, // 3: middle-right medium
          { cols: 2, rows: 1 }, // 4: bottom-left small horizontal
          { cols: 2, rows: 1 }, // 5: bottom-middle small horizontal
          { cols: 2, rows: 2 }, // 6: bottom-right large vertical
          { cols: 2, rows: 1 }, // 7: last small horizontal
        ];

        if (layoutPattern[index]) {
          colSpan = layoutPattern[index].cols;
          rowSpan = layoutPattern[index].rows;
        }

        return (
          <div
            key={index}
            style={{
              gridColumn: `span ${colSpan}`,
              gridRow: `span ${rowSpan}`,
            }}
          >
            <Media
              enlarge
              priority={index < 10}
              sizes="(max-width: 560px) 100vw, 50vw"
              radius="m"
              aspectRatio={
                rowSpan === 2
                  ? "3 / 4"
                  : image.orientation === "horizontal"
                    ? "16 / 9"
                    : "3 / 4"
              }
              src={image.src}
              alt={image.alt}
            />
          </div>
        );
      })}
    </MasonryGrid>
  );
}
