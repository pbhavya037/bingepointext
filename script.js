

const movieReq = async () => {
  const url = `https://api.themoviedb.org/3/trending/all/week?api_key=baa2f39af2ebd5604c32fe6a7b3162e5`;
  const contain = document.getElementById("contain");

  const res = await fetch(url);
  const resJson = await res.json();
  if (resJson.results) {
    resJson.results.forEach((c) => {
      const imLink = c.backdrop_path;

      const elem = document.createElement("div");
      elem.classList.add("card");

      const im = document.createElement("img");
      im.classList.add("poster");
      im.src = `https://image.tmdb.org/t/p/w500/${imLink}`;

      const pr = document.createElement("span");
      pr.classList.add("title");
      pr.innerText = c.name || c.title;

      const vote = parseFloat(c.vote_average).toFixed(1);
      const rt = document.createElement("span");
      rt.classList.add("rate");
      rt.innerHTML = vote;

      const info = document.createElement("div");
      info.classList.add("over");
      info.appendChild(pr);
      info.appendChild(rt);

      elem.appendChild(im);
      elem.appendChild(info);

      contain.appendChild(elem);
    });
  }

};

movieReq();


