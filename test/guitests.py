import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# import page
import time

class Tests(unittest.TestCase):
    url = "https://www.foodforthoughtt.me"
    api_url = "https://api.foodforthoughtt.me"

    def setUp(self):
        self.driver = webdriver.Chrome("./chromedriver")
    
    def test_home_title(self):
        self.driver.get(self.url)
        self.assertIn("Food for thought", self.driver.title)

if __name__ == "__main__":
    unittest.main()
