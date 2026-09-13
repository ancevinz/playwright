import {test, expect} from '@playwright/test';
test('API Testing', async ({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
});


test("POST API test", async ({ request }) => {

    const response1 = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: {
            name: "John",
            job: "QA Engineer"
        }
    });

    expect(response1.status()).toBe(201);

    const body = await response1.json();

    console.log(body);

    expect(body.name).toBe("John");
    expect(body.job).toBe("QA Engineer");
});


test("PATCH API test", async ({ request }) => {

    const response2 = await request.patch("https://reqres.in/api/users/2", {
        data: {
            post: "QA Engineer"
        }
    });

    expect(response2.status()).toBe(200);

    const body = await response2.json();

    console.log(body);

    expect(body.post).toBe("QA Engineer");
});

test.only("PUT API test", async ({ request }) => {

    const response3 = await request.put(
        "https://jsonplaceholder.typicode.com/users/1",
        {
            data: {
                name: "Johns",
                username: "john123",
                email: "john@gmail.com"
            }
        }
    );

    expect(response3.status()).toBe(200);

    const body = await response3.json();

    console.log(body);

    expect(body.name).toBe("Johns");
    expect(body.username).toBe("john123");
    expect(body.email).toBe("john@gmail.com");
});

test("DELETE API test", async ({ request }) => {

    const response4 = await request.delete(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    expect(response4.status()).toBe(200);
}); 