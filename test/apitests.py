import requests
import json
import unittest

api = "http://api.foodforthoughtt.me"

class apiTests(unittest.TestCase) :
	def testRoot(self):
		response = requests.request("GET", api)
		assert(response.ok)

	def testFood(self):
		response = requests.request("GET", api + "/food")
		assert(response.ok)

	def testDisease(self):
		response = requests.request("GET", api + "/disease")
		assert(response.ok)

	def testRestaurant(self):
		response = requests.request("GET", api + "/restaurant")
		assert(response.ok)

if __name__ == '__main__':
	unittest.main()

