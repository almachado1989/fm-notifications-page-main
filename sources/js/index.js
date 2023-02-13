const readButton = document.querySelector(".mark-read")
const posts = document.querySelectorAll(".post-wrapper")
const notificationCount = document.querySelector(".notification-count")

readButton.addEventListener("click", function () {
  document.querySelectorAll(".unread").forEach((post) => {
    post.classList.remove("unread")
    setNotificationCount()
  })
})

posts.forEach((post) => {
  post.addEventListener("click", function () {
    post.classList.toggle("unread")
    setNotificationCount()
  })
})

function setNotificationCount() {
  const unreadPosts = document.querySelectorAll(".unread")
  notificationCount.innerHTML = unreadPosts.length
}
