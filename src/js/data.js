export const taskData = [
  {
    id: 1,
    name: 'Start',
    tasks: [
      {
        desc: 'Sign Up',
        status: 'complete',
        link: '/'
      },
      {
        desc: 'Complete Profile',
        status: 'incomplete',
        link: '/profile'
      },
      {
        desc: 'View Tutorials',
        status: 'incomplete',
        link: '/tutorials'
      }
    ]
  },
  {
    id: 2,
    name: 'Acquire',
    tasks: [
      {
        desc: 'Create Customer Profiles',
        status: 'complete',
        link: '/profile'
      },
      {
        desc: 'Create Team Members and Roles',
        status: 'incomplete',
        link: '/teams'
      },
      {
        desc: 'Create Channels',
        status: 'incomplete',
        link: '/channels'
      },
      {
        desc: 'Import Customer Data',
        status: 'incomplete',
        link: '/import'
      }
    ]
  },
  {
    id: 3,
    name: 'Analyze',
    tasks: [
      {
        desc: 'Assign Team Members to Channels',
        status: 'incomplete',
        link: '/assign-team'
      },
      {
        desc: 'Tag Users',
        status: 'incomplete',
        link: '/tags'
      },
      {
        desc: 'Create Targets',
        status: 'incomplete',
        link: '/targets'
      }
    ]
  },
  {
    id: 4,
    name: 'Interact',
    tasks: [
      {
        desc: 'Set Up Marketing Automation',
        status: 'complete',
        link: '/automation'
      },
      {
        desc: 'Send First Manual Mail',
        status: 'incomplete',
        link: '/manual'
      },
      {
        desc: 'Send Single Customer Message',
        status: 'incomplete',
        link: '/contact'
      }
    ]
  }
];

export const tagData = ['Male', 'Over 30', 'Gringo', 'Pet Lover'];

export const availableTags = ['Modyo', 'New Customer', '+1 Purchases', 'VIP'];

export const targets = ['Active!', 'Chile-based', 'Product'];

export const details = [
  {
    val1: 'Email',
    val2: 'nate@modyo.com'
  },
  {
    val1: 'Location',
    val2: 'Chile'
  },
  {
    val1: 'Job Title',
    val2: 'Product Manager'
  },
  {
    val1: 'Language',
    val2: 'English'
  },
  {
    val1: 'RUT',
    val2: '24.662.824-6'
  },
  {
    val1: 'Sign Up',
    val2: '12 Feb. 2016'
  },
  {
    val1: 'Birthday',
    val2: '5 Apr. 1984'
  }
];

export const activities = [
  {
    from: "You",
    to: "Nate Anderson",
    activity: "Messaging",
    activity_name: "sent Thanks for Visiting to",
    date: "7 minutes ago",
    avatar: "https://static.intercomassets.com/avatars/478313/square_128/nate-1463665377.jpg?1463665377",
    detail: "<div><p>Hi Nate!</p><p>Thanks for coming to our event last week. It was great to have you. As a valued customer...</p></div>"
  },
  {
    from: "Nate Anderson",
    to: false,
    activity: "Messaging",
    activity_name: "sent a message",
    date: "2 days ago",
    avatar: "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/12806188_555536864614133_6823241373123168007_n.jpg?oh=eb50e08057efabe3746ea43778a7156c&oe=57C52AAF",
    detail: "<div><p>Hello,</p><p>I wanted to start the application process for a new car and was curious to see if I could come in for...</p></div>"
  },
  {
    from: "Nate Anderson",
    to: false,
    activity: "Form",
    activity_name: "submitted responses to Modyo Data Form",
    date: "3 days ago",
    avatar: "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/12806188_555536864614133_6823241373123168007_n.jpg?oh=eb50e08057efabe3746ea43778a7156c&oe=57C52AAF",
    detail: false
  },
  {
    from: "You",
    to: "Nate Anderson",
    activity: "Messaging",
    activity_name: "replied to",
    date: "12 days ago",
    avatar: "https://static.intercomassets.com/avatars/478313/square_128/nate-1463665377.jpg?1463665377",
    detail: "<div><p>Nate, as I am sure that you are aware, there are many ways to purchase a car here in Chile. Please come into the...</p></div>"
  }
];

export const notes = [
  {
    author: "You",
    date: "7 June 2016",
    avatar: "https://static.intercomassets.com/avatars/478313/square_128/nate-1463665377.jpg?1463665377",
    message: "Blah blah blah"
  },
  {
    author: "Mark Bonnell",
    date: "31 May 2016",
    avatar: "https://static.intercomassets.com/avatars/478313/square_128/nate-1463665377.jpg?1463665377",
    message: "This guys is on fire..."
  }
];
