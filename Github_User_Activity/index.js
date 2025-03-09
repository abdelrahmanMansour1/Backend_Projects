const username = process.argv[2] || "abdelrahmanMansour1";

fetch(`https://api.github.com/users/${username}/events`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    console.log("Output: ");
    data.map((entry) => {
      switch (entry.type) {
        case "CommitCommentEvent":
          console.log(`- Committed a comment to ${entry.repo.name}`);
          break;
        case "CreateEvent":
          console.log(
            `- Created ${entry.payload.ref_type} in ${entry.repo.name}`
          );
          break;
        case "DeleteEvent":
          console.log(
            `- Deleted ${entry.payload.ref_type} in ${entry.repo.name}`
          );
          break;
        case "ForkEvent":
          console.log(`- Forked ${entry.repo.name}`);
          break;
        case "GollumEvent":
          console.log(`- Gollum for ${entry.repo.name}`);
          break;
        case "IssueCommentEvent":
          console.log(
            `- ${
              entry.payload.action.charAt(0).toUpperCase() +
              entry.payload.action.slice(1)
            } a comment in issue ${entry.payload.issue} in ${entry.repo.name}`
          );
          break;
        case "IssuesEvent":
          console.log(
            `- ${
              entry.payload.action.charAt(0).toUpperCase() +
              entry.payload.action.slice(1)
            } an issue in ${entry.repo.name}`
          );
          break;
        case "MemberEvent":
          console.log(
            `-  ${
              entry.payload.action.charAt(0).toUpperCase() +
              entry.payload.action.slice(1)
            } a member in ${entry.repo.name}`
          );
          break;
        case "PublicEvent":
          console.log(`- Changed ${entry.repo.name} to public`);
          break;
        case "PullRequestEvent":
          console.log(
            `- ${
              entry.payload.action.charAt(0).toUpperCase() +
              entry.payload.action.slice(1)
            } a pull request in ${entry.repo.name}`
          );
          break;
        case "PushEvent":
          console.log(
            `- Pushed ${entry.payload.commits.length} ${
              entry.payload.commits.length > 1 ? "commits" : "commit"
            } to ${entry.repo.name}`
          );
          break;
        case "WatchEvent":
          console.log(`- Starred ${entry.repo.name}`);
          break;
      }
    });
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });
