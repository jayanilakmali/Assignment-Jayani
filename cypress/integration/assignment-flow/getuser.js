import { validateEmail } from './helper-functions'

describe('Users', () => {
    it('Get users by the username Delphine', () => {
        cy
            .request({method: 'GET', url: '/users?username=Delphine'})
            .then(({body, status}) => {
                expect(status).to.eq(200);
                expect(body[0].username).to.eq('Delphine');
            });
    });
});

describe('Posts', () => {
    it('Get all post of the userId 9', () => {
        cy
            .request({method: 'GET', url: '/posts?userId=9'})
            .then(({body, status}) => {
                expect(status).to.eq(200);
                expect(body.length).to.eq(10);
            });
    });
});

describe('Comments', () => {
    it('Get comments of the each posts', () => {
        const testComments = (posts) => {
            posts.forEach(post => {
                cy
                    .request({method: 'GET', url: '/comments', qs: {postId: post.id}})
                    .then(({body, status}) => {
                        const firstComment = body[0] || {};
                        const isValidatedEmail = validateEmail(firstComment.email)
                        cy.log(firstComment.email)
                        expect(status).to.eq(200);
                        expect(isValidatedEmail).to.be.true
                        
                    });
            });
        };

        cy
            .request({method: 'GET', url: '/posts?userId=9'})
            .then(({body}) => {
                testComments(body);
            });
    });
});