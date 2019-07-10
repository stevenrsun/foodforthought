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

        def test_home_title(self):
        self.driver.get(self.url)
        self.assertIn("Budget For Space", self.driver.title)

    def test_food_nav(self):
        self.driver.get(self.url + '/food')
        link = self.driver.find_element_by_link_text("food")
        self.assertIsNotNone(link)
        link.click()
        self.assertEqual("food", self.driver.current_url[-4:])

    def test_restaurants_nav(self):
        self.driver.get(self.url + '/restaurant')
        link = self.driver.find_element_by_link_text("restaurant")
        self.assertIsNotNone(link)
        link.click()
        self.assertEqual("restaurant", self.driver.current_url[-10:])

    def test_diseases_nav(self):
        self.driver.get(self.dests_url)
        link = self.driver.find_element_by_link_text("disease")
        self.assertIsNotNone(link)
        link.click()
        self.assertEqual("disease", self.driver.current_url[-7:])


if __name__ == "__main__":
    unittest.main()
