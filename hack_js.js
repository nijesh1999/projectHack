const inbox_mail = [
  {
    id: 1,
    name: "Girii",
    url: "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg",
    from: "giri@gmail.com",
    to: "query@gmail.com",
    msg: `hi Query,
    Check your written test exam results of Sarkari (Government), Banks, SSC, RRB and other recruitment board exams. `,
    date: "25 Jan 20022, 5:50pm",
  },
  {
    id: 2,
    name: "Gowtham",
    url: "https://media.istockphoto.com/photos/eyes-of-the-tiger-picture-id490989354?s=170667a",
    from: "Gowtham@gmail.com",
    to: "query@gmail.com",
    msg: "A best friend is one of life’s greatest gifts. Whether you met as kids, in college or somewhere in between, they're the person who gets you. You can always count on them to laugh at your corny jokes when no one else does. Not only do they laugh at your stories, but you also share countless inside jokes of your own. They are the person who you can depend on no matter what.",
    date: "21 Jan 20022, 7:00am",
  },
  {
    id: 3,
    name: "tharun",
    url: "https://static.toiimg.com/thumb/msid-84395877,width-1200,height-900,resizemode-4/.jpg",
    from: "tharun@gmail.com",
    to: "query@gmail.com",
    msg: "hai da ",
    date: "23 Jan 20022, 5:50am",
  },
];

const send_mail = [
  {
    name: "Girii",
    url: "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg",
    mail: "giri@gmail.com",
    msg: "hai da ",
  },
  {
    name: "Gowtham",
    url: "https://media.istockphoto.com/photos/eyes-of-the-tiger-picture-id490989354?s=170667a",
    mail: "Gowtham@gmail.com",
    msg: "how are you ?",
  },
  {
    name: "tharun",
    url: "https://static.toiimg.com/thumb/msid-84395877,width-1200,height-900,resizemode-4/.jpg",
    mail: "tharun@gmail.com",
    msg: "hai da ",
  },
];

const draft_mail = [{ to: "giri@gmail.com", msg: "send the task" }];
const count = document.querySelector(".span");
count.innerHTML = `  (${inbox_mail.length})`;
function DisplayInbox() {
  const title = document.querySelector(".titles");
  title.innerHTML = `<i class="fa fa-inbox fa-1x" aria-hidden="true"></i> Inbox`;

  const email_list = document.querySelector(".user-list");
  email_list.innerHTML = "";
  inbox_mail.forEach((data) => {
    console.log(data.name);
    email_list.innerHTML += `
    <div class="user-container">
    <img  class="inbox-avatar param" src="${data.url}" alt="${data.name}">
    <div class="param param1">
    <h3>${data.name}</h3>
    <p>to me 🔻</p>
    </div>
    <div class="box-data">
    <p>From : ${data.from}</p>
    <p>To  :    ${data.to}</p>
    <p>Date : ${data.date}</p>
    </div>
    <p class="p-data">${data.msg}</p>
    </div><br>
    `;
  });
}
DisplayInbox();
function sendMail() {
  const title = document.querySelector(".titles");
  title.innerHTML = `<i class="fa fa-paper-plane fa-1x" aria-hidden="true"></i> Sent`;

  const email_list = document.querySelector(".user-list");
  email_list.innerHTML = "";
  send_mail.forEach((data) => {
    console.log(data.name);
    email_list.innerHTML += `
    <div class="user-container">
    <img  class="user-avatar param" src="${data.url}" alt="${data.name}">
    <div class="param param1">
    <h2>${data.name}</h2>
    <p> ${data.msg}</p>
    </div>
    </div><br>
    `;
  });
}

function draftMail() {
  const title = document.querySelector(".titles");
  title.innerHTML = `<i class="fas fa-save fa-1x"></i> Draft`;
  const email_list = document.querySelector(".user-list");
  email_list.innerHTML = "";
  draft_mail.forEach((data) => {
    email_list.innerHTML += `
    <div class="user-container">
    <img  class="draft-avatar param" src="https://miro.medium.com/max/3840/1*b83_I0nGb9uzc_fZGchzTA.jpeg" alt="${data.name}">
    <div class="param">
   <p><b>Me</b>,<span class="tit">Draft</span></p>
    <p><i>To : ${data.to}</i></p>
    </div>
    <div class="txt-area">
    <textarea  class="txt" rows="4" cols="50">${data.msg}</textarea>
    </div>
    <button class="user-button" onClick="addsendMail()">send</button>
    
    </div><br>
    `;
  });
}

function addsendMail() {
  const val = document.querySelector(".txt").value;
  const data = {
    name: "arunnn",
    url: "https://a-z-animals.com/media/king-cobra-header.jpg",
    mail: "arunn@gmail.com",
    msg: val,
  };
  send_mail.push(data);
  const email_list = document.querySelector(".user-list");
  email_list.innerHTML = `
  <div class="user-container">
  <p class="p-draft"> No Draft Mail...</p>
  </div>`;
}
