const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {

  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    default:
      currentDateParagraph.textContent = formattedDate;

      break;
  }
});

 



/*
console.logで試験しみた結果

<script>
        const date = new Date(); // 現在の日付と時刻を取得
        console.log(date); // コンソールに日付と時刻を表示
        const day = date.getDate();
        console.log(day); // コンソールに日付と時刻を表示
        const month = date.getMonth();
        console.log(month); // コンソールに日付と時刻を表示
    </script>

    これで出すと
Thu Dec 26 2024 20:07:06 GMT+0100 (中央ヨーロッパ標準時)
26
11

理解してきましたね。その通りです。JavaScriptの `Date` オブジェクトは、多くの情報を持つ複合オブジェクトです。`date` 変数に `new Date()` を代入すると、その `date` オブジェクトに対して様々なメソッド（関数）を呼び出すことができます。これらのメソッドを使うことで、特定の部分の情報を取得します。

### 詳しい流れ

1. **`const date = new Date();`**
   - ここで `date` 変数に現在の日付と時刻を持つ `Date` オブジェクトが代入されます。
   - 例: `Thu Dec 26 2024 19:55:17 GMT+0100 (中央ヨーロッパ標準時)`

2. **`const day = date.getDate();`**
   - `date.getDate()` は `date` オブジェクトから日付（日にち）を取得します。
   - 例: `26` （日付が26日の場合）

3. **`const month = date.getMonth() + 1;`**
   - `date.getMonth()` は `date` オブジェクトから月を取得します（0から始まるため、1月は0、2月は1、...、12月は11）。
   - 例: 12月の場合 `date.getMonth()` は `11` を返します。
   - `11 + 1` なので、結果は `12` になります。

### 図解

```javascript
const date = new Date(); 
// date には新しい Date オブジェクトが代入され、現在の日付と時刻を含みます。
// 例: Thu Dec 26 2024 19:55:17 GMT+0100 (中央ヨーロッパ標準時)

const day = date.getDate(); 
// day には date オブジェクトから取得した日付が代入されます。
// 例: 26

const month = date.getMonth() + 1; 
// month には date オブジェクトから取得した月に1を加えた値が代入されます。
// 例: 11 + 1 で 12
```

### `Date` オブジェクトの使い方

- `date.getDate()` は現在の「日にち」を取得します。
- `date.getMonth()` は現在の「月」を0から始める形式で取得します。1を加えて人間にわかりやすい形式にします。

これがJavaScriptの `Date` オブジェクトの基本的な使い方です。日付と時刻を操作するための他のメソッドもたくさんありますので、必要に応じて活用できます。

理解が深まったでしょうか？他に質問があれば、どうぞ教えてくださいね！ 😊

そうですね、説明の通りです。このコードを実行すると、それぞれのコンソール出力は次のようになります：

1. **`console.log(date);`**
   - これにより、`date` 変数に格納された現在の日付と時刻が表示されます。
   - 例: `Thu Dec 26 2024 20:07:06 GMT+0100 (中央ヨーロッパ標準時)`

2. **`console.log(day);`**
   - `date.getDate()` メソッドを使って取得した日付（日にち）が表示されます。
   - 例: `26`

3. **`console.log(month);`**
   - `date.getMonth()` メソッドを使って取得した月が表示されます。月は0から始まるため、12月は`11`です。
   - 例: `11`

### 実行結果の詳細
- `date` 変数には、`new Date()` によって現在の日付と時刻が格納されています。
- `day` には、`date.getDate()` によって取得された日にち（この場合は26日）が格納されています。
- `month` には、`date.getMonth()` によって取得された月（この場合は11月）が格納されています。0始まりの月に1を加えることで、1月は1、12月は12になります。

理解が深まりましたでしょうか。もし他にも疑問点や質問があれば教えてくださいね！😊


`switch`文は、特定の値に基づいて複数のケース（`case`）を評価し、該当するケースの処理を実行するための制御構造です。ここでは、`dateOptionsSelectElement.value`（ドロップダウンリストで選択された値）に応じて、異なる処理を実行するために`switch`文が使われています。

### `switch`文の構造
```javascript
switch (式) {
  case 値1:
    // 式が値1に一致する場合の処理
    break;
  case 値2:
    // 式が値2に一致する場合の処理
    break;
  default:
    // どのケースにも一致しない場合の処理
}
```

### このコードの`switch`文の解説
```javascript
switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate
      .split("-")
      .reverse()
      .join("-");
    break;
}
```

1. **`switch (dateOptionsSelectElement.value)`**:
   - `dateOptionsSelectElement.value`は、ドロップダウンリストでユーザーが選択したオプションの値（例: `"yyyy-mm-dd"`）です。
   - `switch`文は、この値を評価し、該当する`case`を探します。

2. **`case "yyyy-mm-dd":`**:
   - `dateOptionsSelectElement.value`が`"yyyy-mm-dd"`に一致する場合、このケースの処理が実行されます。

3. **`currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");`**:
   - `formattedDate`（例: `"5-10-2023"`）を`split("-")`で分割し、`reverse()`で順序を逆にして、`join("-")`で再結合します。
   - 結果として、`currentDateParagraph`のテキストは`"2023-10-5"`に更新されます。

4. **`break;`**:
   - `break`文は、`switch`文の実行を終了します。これにより、他の`case`が評価されないようにします。

### 具体的な動作の流れ
1. **ユーザーが`Year, Month, Day`を選択**:
   - `dateOptionsSelectElement.value`は`"yyyy-mm-dd"`になります。

2. **`switch`文の評価**:
   - `switch`文は`dateOptionsSelectElement.value`を評価し、`case "yyyy-mm-dd":`に一致するかどうかを確認します。

3. **該当するケースの処理**:
   - `case "yyyy-mm-dd":`に一致するため、以下の処理が実行されます。
     ```javascript
     currentDateParagraph.textContent = formattedDate
       .split("-")
       .reverse()
       .join("-");
     ```
   - `formattedDate`が`"5-10-2023"`の場合、`split("-")`で`["5", "10", "2023"]`に分割され、`reverse()`で`["2023", "10", "5"]`に逆順になり、`join("-")`で`"2023-10-5"`に再結合されます。

4. **結果の表示**:
   - `currentDateParagraph`のテキストは`"2023-10-5"`に更新されます。

### 他のケースの追加
もし他のオプション（例: `"dd-mm-yyyy"`や`"mm-dd-yyyy-h-mm"`）にも対応したい場合、`switch`文に新しい`case`を追加できます。例えば：

```javascript
switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate
      .split("-")
      .reverse()
      .join("-");
    break;
  case "dd-mm-yyyy":
    currentDateParagraph.textContent = formattedDate; // そのまま表示
    break;
  case "mm-dd-yyyy-h-mm":
    currentDateParagraph.textContent = `${month}-${day}-${year}, ${hours}:${minutes}`;
    break;
}
```

### まとめ
- `switch`文は、`dateOptionsSelectElement.value`の値に基づいて、該当する`case`の処理を実行します。
- `case "yyyy-mm-dd":`では、日付の表示形式を`yyyy-mm-dd`に変換して表示します。
- `break;`は、`switch`文の実行を終了し、他の`case`が評価されないようにします。

このように、`switch`文を使うことで、ユーザーの選択に応じて異なる処理を簡単に分岐させることができます。

*/