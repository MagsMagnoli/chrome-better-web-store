(() => {
  // query all list items
  const results = Array.from(
    document.querySelectorAll(".webstore-test-wall-tile")
  );

  // convert to an array of [index, item, stats] for sorting
  const indexedResultStats: [
    number,
    Element,
    { average: number; ratings: number }
  ][] = results.map((item, i) => {
    // fetch the element with title that includes the word 'average'
    const element = Array.from(
      item.querySelectorAll<HTMLElement>("div[title]")
    ).filter((item) => item["title"]?.includes("Average"))[0];

    // regex matcher for parsing average rating and total ratings from title string
    const regex = /[\d,]+(?:.\d)?/gm;
    const matches = element?.title?.match(regex) ?? ["0", "0", "0"];

    // extract stats
    const stats = {
      average: Number(matches[0]),
      ratings: Number(matches[2]?.replace(",", "") ?? 1),
    };

    // return data in [index, item, stats] format
    return [i, item, stats];
  });

  // sort results, prioritizing ratings first then average
  indexedResultStats.sort((a, b) => {
    // compare total ratings
    if (a[2].ratings > b[2].ratings) {
      return -1;
    } else if (b[2].ratings > a[2].ratings) {
      return 1;
    } else {
      // if total ratings are even compare average rating
      return b[2].average - a[2].average;
    }
  });

  // query row that contains results
  const row = document.querySelector("div[role='row']");
  if (!row) {
    throw new Error("row not found");
  }

  // clear results
  row.innerHTML = "";

  // insert sorted results
  for (const item of indexedResultStats) {
    row.appendChild(item[1]);
  }
})();
