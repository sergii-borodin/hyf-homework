Promise.all([
  fetch("https://api.github.com/search/repositories?q=user:oleksandra-lavryk"),
  fetch("https://api.github.com/search/repositories?q=user:rismita87"),
  fetch("https://api.github.com/search/repositories?q=user:veronicaburduzhan"),
])
  .then((responses) => {
    console.log(responses);
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    console.log(data);
    renderData(data);
  });

function renderData(data) {
  data.forEach((account) => {
    const listOfRepos = document.getElementById("listOfRepos");
    const itemRepo = document.createElement("li");
    const userName = document.createElement("h3");
    userName.textContent = `${account.items[0].owner.login}s repository`;
    itemRepo.appendChild(userName);
    for (let i = 0; i < account.items.length; i++) {
      const repo = account.items[i];
      console.log(repo.clone_url);
      const repoName = document.createElement("h4");
      repoName.textContent = repo.name;
      itemRepo.appendChild(repoName);
      const link = document.createElement("a");
      link.textContent = repo.clone_url;

      itemRepo.appendChild(link);
    }
    listOfRepos.appendChild(itemRepo);
  });
}
