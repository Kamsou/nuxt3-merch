export const useCategories = () => {
  return useState('categories', () => [
      { id: 'pony', title: 'Poneys' },
      { id: 'horse', title: 'Chevaux' },
      { id: 'other', title: 'Autres' },
    ])
}