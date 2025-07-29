const API_BASE_URL = "http://localhost:8080";

const navSignin = document.querySelector("#nav-signin");
const navSignup = document.querySelector("#nav-signup");
const navBoard = document.querySelector("#nav-board");
const navWrite = document.querySelector("#nav-write");

const pageSignin = document.querySelector("#page-signin");
const pageSignup = document.querySelector("#page-signup");
const pageBoard = document.querySelector("#page-board");
const pageWrite = document.querySelector("#page-write");

const singupForm = document.querySelector("#signup-form");

// 페이지 전환 함수
function changePages(pageElement) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });
  pageElement.classList.add("active");
}

// 회원가입 요청 함수

async function signupHandler(event) {
  event.preventDefault(); //폼의 기본 동작을 막기위해

  const usernameInput = document.querySelector("#signup-id");
  const passwordInput = document.querySelector("#signup-password");
  const emailInput = document.querySelector("#signup-email");

  //   서버로 보낼 회원가입 데이터를 객체로 만듦
  const signupData = {
    username: usernameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
  };

  //   입력 값이 비어있는지 확인
  if (!signupData.username || !signupData.password || !signupData.email) {
    alert("모든 항목을 입력해주세요");
    return;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 데이터 전송을 명시
      },
      body: JSON.stringify(signupData), // 객체 → JSON 문자열 변환
    });

    const responseData = await response.json(); //요청 응답 결과

    if (responseData.status !== "success") {
      alert(responseData.message);
    } else {
      alert(responseData.message);
      singupForm.reset(); //폼의 입력내용 초기화
      changePages(pageSignin);
    }
  } catch (error) {
    // 요청 자체에 실패한 경우 (문제가 생겼을 경우)
    console.log("회원가입 요청 오류 발생:", error);
    alert("회원가입 요청에 오류가 발생했습니다.");
  }
}

navSignin.addEventListener("click", () => {
  changePages(pageSignin);
});

navSignup.addEventListener("click", () => {
  changePages(pageSignup);
});

navBoard.addEventListener("click", () => {
  changePages(pageBoard);
});

navWrite.addEventListener("click", () => {
  changePages(pageWrite);
});

singupForm.addEventListener("submit", signupHandler);
