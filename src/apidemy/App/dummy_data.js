export const searchResultData = [
              {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Oxford University', courseName: 'Business Studies', rating: 4, noOfRatings: 2003, author: 'Alice Stevens'},
              {style: {r: 200, g: 100, b: 100}, institutionName: 'University of Exeter', courseName: 'Business Studies', rating: 4, noOfRatings: 2003, author: 'Melanie Green'},
              {style: {r: 100, g: 230, b: 50}, isTop: true, institutionName: 'Oxford University', courseName: 'Business Studies with Business English', rating: 2, noOfRatings: 403, author: 'Stephen Hawkings'},
              {style: {r: 200, g: 100, b: 20}, institutionName: 'Bristol University', courseName: 'Business Management', rating: 3, noOfRatings: 1044, author: 'Sally Gool'},
              {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Cambirdge University', courseName: 'Business Studies', rating: 4, noOfRatings: 203, author: 'Stephen Hawkings'},
              {style: {r: 10, g: 100, b: 220}, institutionName: 'London School of Economics', courseName: 'Business Studies', rating: 5, noOfRatings: 7003, author: 'Jennifer Williams'},
              {style: {r: 100, g: 10, b: 220}, institutionName: 'University of Edinbugh', courseName: 'Business Administration', rating: 3, noOfRatings: 209, author: 'William Boole'},
              {style: {r: 100, g: 220, b: 22}, institutionName: 'Hull University', courseName: 'Business Studies', rating: 1, noOfRatings: 3019, author: 'Sarah Hawks'},
             ];

export const courseData = {
          courseSummary:
          `Your knowledge is contextualised, and your employability enhanced,
          through our strong emphasis on practical real-world business experience.
          This is via the use of case-study-led teaching and work experience opportunities
          with globally recognised companies,
          like IBM, Disney and Siemens. This builds your business awareness and
          helps you develop personal and professional skills. We place a strong
          emphasis on helping you develop practical skills for your future career.`,
          rating: 5,
          institutionName: 'University of Warwick',
          courseName: 'Business Management Summer Experience',
          price: 2000,
          courseStructure:
            [
              'ACC1003 Introduction to Accounting and Finance',
              'BUS1002 Global Business Environment',
              'BUS1004 Understanding Business Growth',
              'BUS1015 Management and Organisation',
              'BUS1016 Academic and Professional Skill Development',
            ],
          reviews:
            [
              {
                author: 'William Wallace',
                title: 'Changed My Life',
                content:
                  `The BA in business is really amazing, it covers everything you
                  need to know about getting a job in the world of business. I got
                  an administration job straight out of school and I'm on course
                  to do an MBA next autumn`,
                rating: 4, courseName: 'Business Management BA Honours'
              }
            ]
          }

export const institutionData = {
                badges: ['satisfied', 'leader'],
                rating: 5,
                courses: [
                  {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Newcastle University', courseName: 'Business Studies', rating: 4, noOfRatings: 300, author: 'Ian Jones'},
                  {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Newcastle University', courseName: 'Medicine', rating: 5, noOfRatings: 2009, author: 'Will Bower'},
                  {style: {r: 100, g: 100, b: 220}, isTop: true, institutionName: 'Newcastle University', courseName: 'Law', rating: 4, noOfRatings: 376, author: 'Sally Jennings'},
                ],
                reviews: [
                  {
                    author: 'Sam Hinton',
                    title: 'Really qualified teachers',
                    content:
                      `I came here for a short course about business and I loved it.
                      The staff were extremely helpful and I was able to learn a lot about
                      the world of business. The best thing about the course was the lecturers,
                      they were very well qualified and I alwas felt like I was getting value for money.
                      I have enrolled on their second level business course and I can't wait to start
                      in September.`,
                    rating: 5, courseName: 'Business'
                  }
                ]
              }
