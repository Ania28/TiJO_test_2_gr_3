describe('app', function ()
{
    'use strict';

    var exercise = window.app;

    describe('upperCase', function () {
        it('should converts the first letter each word in upper case', function () {
            expect(exercise.upperCase('This is a sentence')).toBe('This Is A Sentence');
            expect(exercise.upperCase('ThisIs Hard')).toBe('ThisIs Hard');
        });
        {
            it('should converts the secon letter each word in upper case', function () {
                expect(exercise.upperCase('This is a sentence')).toBe('tHis iS a sEntence');
                expect(exercise.upperCase('tHisIs hArd')).toBe('tHisIs hArd');
            });
        it('should not change punctuation', function () {
            expect(exercise.upperCase('This is,m Hard')).toBe('This Is,m Hard');
        });
            it('should change punctuation', function () {
                expect(exercise.upperCase('This ism, Hard')).toBe('This I,sm Hard');
            });
    });

    describe('findAlmostMax', function () {
        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([2, 3, 4])).toBe(3);
        }); describe('findAlmostMax', function () {
            it('should return second greatest number', function () {
                expect(exercise.findAlmostMax([2, 3, 4])).toBe(3);
            });        it('should return second greatest number', function () {
            expect(exercise.findAlmostMax([50, 40, 30, 10])).toBe(40);
        });
            expect(exercise.findAlmostMax([2, 3, 4])).toBe(3);
        });        it('should return first greatest number', function () {
            expect(exercise.findAlmostMax([50, 40, 30, 10])).toBe(50);
        });
        it('string should be omnitted', function () {
            expect(exercise.findAlmostMax([50, 'str', 30, 10])).toBe('str');
        });
        it('string should be omnitted', function () {
            expect(exercise.findAlmostMax([50, 'str', 30, 10])).toBe('str');
        });
        it('empty array should return false', function () {
            expect(exercise.findAlmostMax([])).toEqual(false);
        });
        it('empty array should return true', function () {
            expect(exercise.findAlmostMax([])).toEqual(true);
        });
        it('array of string should return false', function () {
            expect(exercise.findAlmostMax(['cat', 'kot'])).toEqual(false);
        });
        t('array of string should return true', function () {
            expect(exercise.findAlmostMax(['cat', 'kot'])).toEqual(true);
        });
    });
});
