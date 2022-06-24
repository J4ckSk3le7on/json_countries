[
	{
		"countryName":"Panamá",
		"countryCode":"PA",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"options":[
					{
						"label":"Cedula",
						"regex":"^[A-Za-z0-9]{5,22}$",
						"value":"Cedula"
					},
					{
						"label":"RUC",
						"regex":"^[A-Za-z0-9]{5,22}$",
						"value":"RUC"
					},
					{
						"label":"PASS",
						"regex":"^[A-Za-z0-9]{8,12}$",
						"value":"PASS"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"Cuenta de Ahorros",
						"regex":"^[a-zA-Z]{1}$",
						"value":"S"
					},
					{
						"label":"Cuenta Corriente",
						"regex":"^[a-zA-Z]{1}$",
						"value":"C"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"República Dominicana",
		"countryCode":"DO",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"options":[
					{
						"label":"RN",
						"regex":"[0-9]",
						"value":"RN"
					},
					{
						"label":"CE",
						"regex":"^[0-9]{11}$",
						"value":"CE"
					},
					{
						"label":"CR",
						"regex":"^[A-Za-z0-9]{7,12}$",
						"value":"CR"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"Cuenta de Ahorros",
						"regex":"^[a-zA-Z]{1}$",
						"value":"S"
					},
					{
						"label":"Cuenta Corriente",
						"regex":"^[a-zA-Z]{1}$",
						"value":"C"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Bolivia",
		"countryCode":"BO",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"options":[
					{
						"label":"CI",
						"regex":"^[0-9]{8}$",
						"value":"CI"
					},
					{
						"label":"CE",
						"regex":"^[Ee][0-9]{8}$",
						"value":"CE"
					},
					{
						"label":"NIT",
						"regex":"^[0-9]{15,25}$",
						"value":"NIT"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^[0-9]{1,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"Banco Mercantil",
						"regex":"^[0-9]{10}$",
						"value":"Banco Mercantil"
					},
					{
						"label":"Banco Nacional de Bolivia",
						"regex":"^[0-9]{10}$",
						"value":"Banco Nacional de Bolivia"
					},
					{
						"label":"Banco Unión",
						"regex":"^[0-9]{14}$",
						"value":"Banco Unión"
					},
					{
						"label":"Other banks",
						"regex":"^[0-9]{15,25}$",
						"value":"Other banks"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Chile",
		"countryCode":"CL",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"options":[
					{
						"label":"RUT",
						"regex":"^[A-Za-z0-9]{8,9}$",
						"value":"RUT"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^[0-9]{1,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,40}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"Cuenta de Ahorros",
						"regex":"^[a-zA-Z]{1}$",
						"value":"S"
					},
					{
						"label":"Cuenta corriente",
						"regex":"^[a-zA-Z]{1}$",
						"value":"C"
					},
					{
						"label":"Cuenta VISA",
						"regex":"^[a-zA-Z]{1}$",
						"value":"V"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Paraguay",
		"countryCode":"PY",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"options":[
					{
						"label":"CI",
						"regex":"^[0-9]{7}$",
						"value":"CI"
					},
					{
						"label":"RUT",
						"regex":"^[0-9]{8}$",
						"value":"RUT"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"SIPAP",
						"regex":"^[0-9]{16}$",
						"value":"SIPAP"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"United States",
		"countryCode":"US",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"options":[
					{
						"label":"EIN",
						"regex":"^[0-9]{9}$",
						"value":"EIN"
					},
					{
						"label":"Security Number",
						"regex":"^[0-9]{9}$",
						"value":"Security Number"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":false,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":false,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":false,
				"options":[
					
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Argentina",
		"countryCode":"AR",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"options":[
					{
						"label":"CUIT/CUIL",
						"regex":"^[0-9]{11}$",
						"value":"CUIT/CUIL"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"CBU/CVU",
						"regex":"^[0-9]{22}$",
						"value":"CBU/CVU"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Colombia",
		"countryCode":"CO",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"options":[
					{
						"label":"NIT",
						"regex":"^[0-9]{10,11}$",
						"value":"NIT"
					},
					{
						"label":"CC",
						"regex":"^[0-9]{6,10}$",
						"value":"CC"
					},
					{
						"label":"CE",
						"regex":"^[A-Za-z0-9_]{12,30}$",
						"value":"CE"
					},
					{
						"label":"Pasaporte",
						"regex":"^[A-Za-z0-9_]{12,30}$",
						"value":"PASS"
					},
					{
						"label":"Permiso Especial de Permanencia",
						"regex":"^[A-Za-z0-9_]{15,30}$",
						"value":"PEP"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"Cuenta de ahorros",
						"regex":"^[a-zA-Z]{1}$",
						"value":"S"
					},
					{
						"label":"Cuenta de ahorros",
						"regex":"^[a-zA-Z]{1}$",
						"value":"C"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Mexico",
		"countryCode":"MX",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^.{3,40}$",
				"active":false,
				"options":[
					
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"Cuenta CLABE",
						"regex":"^[0-9]{18}$",
						"value":"CLABE"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Brazil",
		"countryCode":"BR",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"options":[
					{
						"label":"CPF",
						"regex":"^[0-9]{11}$",
						"value":"CPF"
					},
					{
						"label":"CNPJ",
						"regex":"^[0-9]{14}$",
						"value":"CNPJ"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"Cuenta de ahorros",
						"regex":"^[a-zA-Z]{1}$",
						"value":"S"
					},
					{
						"label":"Cuenta de ahorros",
						"regex":"^[a-zA-Z]{1}$",
						"value":"C"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":true,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Costa Rica",
		"countryCode":"CR",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"options":[
					{
						"label":"CI",
						"regex":"^[0-9]{9}$",
						"value":"CI"
					},
					{
						"label":"CJ",
						"regex":"^[0-9]{10}$",
						"value":"CJ"
					},
					{
						"label":"CR",
						"regex":"^[0-9]{11,22}$",
						"value":"CR"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"IBAN",
						"regex":"^[a-zA-Z0-9]{22}$",
						"value":"IBAN"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Perú",
		"countryCode":"PE",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"options":[
					{
						"label":"DNI",
						"regex":"^[A-Za-z0-9]{8,9}$",
						"value":"DNI"
					},
					{
						"label":"PASS",
						"regex":"^[0-9]{4,20}$",
						"value":"PASS"
					},
					{
						"label":"RUC",
						"regex":"^[0-9]{11}$",
						"value":"RUC"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"Cuenta Corriente",
						"regex":"^[a-zA-Z]{1}$",
						"value":"C"
					},
					{
						"label":"Cuenta de Ahorros",
						"regex":"^[a-zA-Z]{1}$",
						"value":"S"
					},
					{
						"label":"Cuenta Maestra",
						"regex":"^[a-zA-Z]{1}$",
						"value":"M"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	},
	{
		"countryName":"Ecuador",
		"countryCode":"EC",
		"requiredFields":[
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_last_name"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_document_id"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"options":[
					{
						"label":"CI",
						"regex":"^[0-9]{10}$",
						"value":"CI"
					},
					{
						"label":"RUC",
						"regex":"^[0-9]{13}$",
						"value":"RUC"
					},
					{
						"label":"PASS",
						"regex":"^[A-Za-z0-9]{8,12}$",
						"value":"PASS"
					}
				],
				"identifier":"beneficiary_document_type"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_address"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_city"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_postal_code"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_state"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_email"
			},
			{
				"regex":"^.{3,40}$",
				"active":true,
				"identifier":"beneficiary_phone"
			},
			{
				"regex":"^[0-9]{1,4}$",
				"active":true,
				"identifier":"bank_code"
			},
			{
				"regex":"[0-9]",
				"active":true,
				"identifier":"account_number"
			},
			{
				"regex":"^[a-zA-Z]{1}$",
				"active":true,
				"options":[
					{
						"label":"Cuenta de Ahorros",
						"regex":"^[a-zA-Z]{1}$",
						"value":"S"
					},
					{
						"label":"Cuenta Corriente",
						"regex":"^[a-zA-Z]{1}$",
						"value":"C"
					}
				],
				"identifier":"account_type"
			},
			{
				"regex":"^[a-zA-Z0-9]{4,5}$",
				"active":false,
				"identifier":"branch_number"
			}
		]
	}
]