export const state = () => ({
  search: '',
  list: [],
  types: [
    'เสริมจมูก',
    'เสริมคาง',
    'เสริมหน้าอก',
    'อื่นๆ โปรดกรอก Other'
  ],
  sex: [
    'Male',
    'Female',
    'Bisexual',
    'Transgender',
    'No gender'
  ],
  headers: [
    {
      text: 'First Name',
      align: 'start',
      sortable: true,
      value: 'firstName'
    },
    { text: 'List Name', value: 'listName' },
    { text: 'Age', value: 'age' },
    { text: 'Height', value: 'height' },
    { text: 'Weight', value: 'weight' },
    { text: 'Phone', value: 'phone' },
    { text: 'E-mail', value: 'email' },
    { text: 'Type', value: 'type' },
    { text: 'Sex', value: 'sex' },
    { text: 'Other', value: 'other' }
  ]
})

export const mutations = {
  add (state, { firstName, listName, phone, email, type, sex, other, age, height, weight }) {
    state.list.push({
      firstName,
      listName,
      phone,
      email,
      type,
      sex,
      other,
      age,
      height,
      weight,
      done: false
    })
  }
}

export const getters = {
  listData (state) {
    return state.list
  }
}
