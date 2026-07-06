/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const set = new Set();

  for (let email of emails) {
    let [local, domain] = email.split("@");

    // Ignore everything after '+'
    local = local.split("+")[0];

    // Remove all dots
    local = local.replace(/\./g, "");

    set.add(local + "@" + domain);
  }

  return set.size;
};
