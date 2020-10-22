// -----------------------------------------------
// 値を強制する(スペースのみの場合も含む)
export const requiredValidate = (value) => {
  if (value.replace(/\s+/g, '') !== '') return true;
  return '必須項目です'
}

// -----------------------------------------------
// 半角を強制する
export const hankakuValidate = (value) => {
  if (value.match(/^[A-Za-z0-9]*$/)) return true;
  return '半角で入力してください';
}

// -----------------------------------------------
// 全角を強制する
export const zenkakuValidate = (value) => {
  if (value.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) return true;
  return '全角で入力してください';
}

// -----------------------------------------------
// 日本の電話番号を強制する
export const phoneValidate = (value) => {
  const replaceValue = value.replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi,'');

  if (replaceValue.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)) return true;
  return '電話番号の形式が正しくありません';
}

// -----------------------------------------------
// メールアドレスの形式を強制する
export const mailValidate = (value) => {
  if (value.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/)) return true;
  return 'メールアドレスの形式が正しくありません'
}