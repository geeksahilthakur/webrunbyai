import time
import random

import requests
import openai

from main import chat_with_gpt

# from main import topics, chat_with_gpt


topics = [
    "E-commerce Trends in India",
    "Funding Opportunities for Startups",
    "Impact of Government Policies on Startups",
    "Innovative Agritech Startups",
    "Challenges and Solutions for Women Entrepreneurs",
    "Digital Marketing Strategies for Startups",
    "Healthtech Startups Revolutionizing Healthcare",

]


def get_blogs():
    try:
        response = requests.get('http://localhost:3000/api/blogs')
        return response.json()
    except Exception as e:
        print("An error occurred:", str(e))
        return []


if __name__ == "__main__":
    for user_input in topics:
        idx = random.randint(0, 7)
        user_input = "write a 50 words blog post on " + topics[
            idx] + " . and it should have a good title and description "
        print("you:", user_input)
        response = chat_with_gpt(user_input)
        print("chatbot:", response)

        blog_data = {"title": f"Blog Title: {topics[idx]}", "body": response}
        requests.post('http://localhost:3000/api/blogs', json=blog_data)

        time.sleep(10)
