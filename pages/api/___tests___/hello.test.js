import handler from '../hello';

describe('hello', () => {
  it('hello', () => {
    const req = {};
    const res = { statusCode: '', json: jest.fn() };
    handler(req, res);
    expect(res.statusCode).toEqual(200);
    expect(res.json).toHaveBeenCalledWith({ name: 'John Doe' });
  });
});
