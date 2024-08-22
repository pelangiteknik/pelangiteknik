export function convertToRupiah(number) {
    return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}