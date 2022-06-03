export const validName = new RegExp("^[a-zA-Z0-9 ]+$");

export const validUserName = new RegExp("^[a-zA-Z0-9_@.]+$");

export const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
