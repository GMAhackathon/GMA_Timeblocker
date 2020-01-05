export const adminDashboardTabs = [
  {key: "Calendar"},
  {key: "Users"}
]

export const usersTableColumns = [
  {
    title: 'User ID',
    dataIndex: 'id',
    key: 1
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 2
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 4
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 5
  },
  {
    title: 'Family Size',
    dataIndex: 'familySize',
    key: 6
  }
]

export const calendarTableColumns = [
  {
    title: 'User ID',
    dataIndex: 'users_id',
    key: 1
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 2
  },
  {
    title: 'Meals',
    dataIndex: 'meals',
    key: 4
  }
]
