function getElementWidth(content, padding, border) {
    const contentToNumber = Number.parseFloat(content);
    const paddingToNumber = Number.parseFloat(padding);
    const borderToNumber = Number.parseFloat(border);
    const elementWidth = (contentToNumber + (paddingToNumber + borderToNumber) * 2);
    return elementWidth;
    
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));