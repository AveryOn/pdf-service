import fs from 'fs'
import path from 'path'
// @ts-ignore
import PdfPrinter from 'pdfmake';
import { fileURLToPath } from 'url'
import { imageToBase64DataUrl } from './parse-img.js';


(async () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const fonts = {
    Roboto: {
      normal: path.resolve(__dirname, './WDXLLubrifontTC-Regular.ttf'),
      bold: path.resolve(__dirname, './WDXLLubrifontTC-Regular.ttf'),
      italics: path.resolve(__dirname, './WDXLLubrifontTC-Regular.ttf'),
      bolditalics: path.resolve(__dirname, './WDXLLubrifontTC-Regular.ttf'),
    }
  }

  const printer = new PdfPrinter(fonts)
  const svgExample = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><path d="M 0.0 112 L 20 124 L 40 129 L 60 126 L 80 120 L 100 111 L 120 104 L 140 101 L 164 106 L 170 103 L 173 80 L 178 60 L 185 39 L 200 30 L 220 30 L 240 40 L 260 61 L 280 69 L 290 68 L 288 77 L 272 85 L 250 85 L 230 85 L 215 88 L 211 95 L 215 110 L 228 120 L 241 130 L 251 149 L 252 164 L 242 181 L 221 189 L 200 191 L 180 193 L 160 192 L 140 190 L 120 190 L 100 188 L 80 182 L 61 179 L 42 171 L 30 159 L 13 140 L 00 112 Z" fill="yellow" stroke="black"/></svg>'
  const imgExample = await imageToBase64DataUrl('./android.png')

  const docDefinition = {
    footer: function(currentPage: any, pageCount: any) { 
      return {
        text: 'FOOTER:   ' + currentPage.toString() + ' of ' + pageCount,
        margin: 8,
      }
    },
    header: function(currentPage: any, pageCount: any, pageSize: any) {
      // you can apply any logic and return any valid pdfmake element
      return [
        { text: 'HEADER EXAMPLE', margin: 10 },
      ]
    },
    content: [
      { text: 'Транзакция (Заголовок)', fontSize: 42 },
      { text: ' ', fontSize: 20 },

      { text: 'QR EXAMPLE', fontSize: 16 },
      { text: ' ', fontSize: 5 },
      { qr: 'example qr', foreground: 'white', background: 'black' },

      { text: ' ', fontSize: 15 },
      { text: 'IMG EXAMPLE', fontSize: 16 },
      { text: ' ', fontSize: 5 },
      {
        // if you specify both width and height - image will be stretched
        image: imgExample,
        width: 150,
        height: 150,
      },
      
      
      { text: ' ', fontSize: 15 },
      { text: 'SVG EXAMPLE:', fontSize: 16 },

      {
        // If no width/height/fit is used, then dimensions from the svg element is used.
        svg: svgExample,
      },
      {
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: ["*", "auto", "auto", "auto", "*"],
          body: [
            ['Получатель', 'ИНН / КПП', 'Банк', 'БИК / Счёт', 'Назначение платежа'],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
            [
              'ООО «Рога и Копыта»', 
              '1234567890 / 0987654321', 
              'АО «АУФ-Банк»', 
              { text: '044525225 / 40702810900000000001', color: 'blue' }, 
              'Оплата услуг по договору №666'
            ],
          ]
        }
      }
    ],
    defaultStyle: {
      font: 'Roboto'

    },
  }

  // console.debug('[DEBUG] docDefinition', JSON.stringify(docDefinition, null, 2))

  const pdfDoc = printer.createPdfKitDocument(docDefinition)
  pdfDoc.pipe(fs.createWriteStream('out.pdf'))
  pdfDoc.end()
})()
