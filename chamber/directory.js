async function loadMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}
loadMembers();