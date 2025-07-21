const sumbitButton = document.querySelector(".input-button");

sumbitButton.onclick = () => {
  const input = document.querySelector(".inputs");
  const dataList = document.querySelector(".data-list");
  if (input.value === "") {
    alert("빈칸입니다.");
    return;
  }
  dataList.innerHTML += `<li>${input.value}</li>`;

  input.value = "";
};
