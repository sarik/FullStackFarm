const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  let emptyEmails = 0;
  emails = removeTrails(emails, ",");
  console.log("final", emails);
  if (!emails) return "You must provide values separated by commas";
  const invalidEmails = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => {
      if (!email) emptyEmails++;
      return email ? re.test(email) === false : false;
    });

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails} `;
  }
  if (emptyEmails) {
    return `${emptyEmails} empty mails found: Please provide emails separated by comma `;
  }

  return;
};

function removeTrails(str, char) {
  let len = str.length;
  let i;
  let temp = str;
  if (str.lastIndexOf(char) == str.length - 1) {
    for (i = len - 1; i >= 0; i--) {
      if (temp.charAt(i) == char) {
        temp = temp.substring(0, temp.length - 1);
      } else {
        break;
      }
    }
  }
  if (str.charAt(0) == char) {
    for (i = 0; i < len; i++) {
      if (temp.charAt(0) == char) {
        temp = temp.substring(i + 1, str.length);
      } else {
        break;
      }
    }
  }
  return temp;
}
