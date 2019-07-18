const getVisiblePhones = (phones, { name = '', sortBy = ''}) => {
    return phones.filter((phone) => {
      const nameMatch = phone.name.toLowerCase().includes(name.toLowerCase());
      return nameMatch;
    }).sort((a, b) => {
        if (sortBy === 'price') {
            return a.price < b.price ? -1 : 1
        } else {
            return ''
        }
    })
};

export default getVisiblePhones;