``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第一行，設定變數 i 為 0，檢查 i 是否小於 arr 長度，是，繼續執行，進入第一圈迴圈，否，跳出迴圈，執行第三行
2. 執行第二行，判斷 arr 第 i 個值是否小於等於 0，是，回傳 invalid，不是繼續執行第一行
3. 執行第三行，設定變數 i 為 2，檢查 i 是否小於 arr 長度，是，繼續執行，進入第一圈迴圈，否，跳出迴圈，執行第五行
4.  執行第四行，判斷第 i 個數字是否為 i 前兩個數字相加，如果不是的話回傳 invalid
5.  執行第五行， 回傳 valid
6. 執行第六行，回傳 invalid