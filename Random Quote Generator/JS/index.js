var quotes = [
    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Life is what happens when you're busy making other plans.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "It is never too late to be what you might have been.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "The only thing worse than being blind is having sight but no vision.",
    "If you want to lift yourself up, lift up someone else.",
    "The best way to predict the future is to invent it.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "It's not what you look at that matters, it's what you see.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The journey of a thousand miles begins with one step.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Strive not to be a success, but rather to be of value.",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "The road to success and the road to failure are almost exactly the same.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only person you are destined to become is the person you decide to be.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "We may encounter many defeats but we must not be defeated.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    "Failure is the opportunity to begin again more intelligently.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "When you cease to dream, you cease to live.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    "Success is not in what you have, but who you are.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "You can't go back and change the beginning, but you can start where you are and change the ending.",
    "If you want to achieve greatness stop asking for permission.",
    "Opportunities don't happen, you create them.",
    "The only way to do great work is to love what you do.",
    "Don't let yesterday take up too much of today.",
    "Dream big and dare to fail.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Believe you can and you're halfway there.",
    "There are no traffic jams along the extra mile.",
    "Do what you can with all you have, wherever you are.",
    "You are never too old to set another goal or to dream a new dream.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals."
];

var authors = [
    "Steve Jobs",
    "Robert Frost",
    "John Lennon",
    "Theodore Roosevelt",
    "Eleanor Roosevelt",
    "Ralph Waldo Emerson",
    "George Eliot",
    "Winston Churchill",
    "Mark Twain",
    "Mahatma Gandhi",
    "Helen Keller",
    "Booker T. Washington",
    "Alan Kay",
    "Confucius",
    "Nelson Mandela",
    "Henry David Thoreau",
    "Helen Keller",
    "Abraham Lincoln",
    "Les Brown",
    "Thomas Edison",
    "Albert Einstein",
    "Napoleon Hill",
    "Vince Lombardi",
    "Earl Nightingale",
    "Steve Jobs",
    "Roy T. Bennett",
    "John C. Maxwell",
    "Leo Buscaglia",
    "Maya Angelou",
    "Winston Churchill",
    "Jim Rohn",
    "Michael Jordan",
    "Ralph Waldo Emerson",
    "Vince Lombardi",
    "Zig Ziglar",
    "Wayne Gretzky",
    "Steve Jobs",
    "Will Rogers",
    "Mark Twain",
    "Les Brown",
    "George Bernard Shaw",
    "John F. Kennedy",
    "George Eliot",
    "C.S. Lewis",
    "Bob Dylan",
    "Gail Devers",
    "Steve Jobs",
    "Dalai Lama",
    "Les Brown",
    "Theodore Roosevelt",
    "William Shakespeare",
    "Robert Frost"
];

var previousIndex = -1;

function displayRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    let quote = quotes[randomIndex];
    let author = authors[randomIndex];

    document.getElementById("quoteText").innerText = `"${quote}"`;
    document.getElementById("quoteAuthor").innerText = `-- ${author}`;

    previousIndex = randomIndex;
}
