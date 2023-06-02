import { Button, Checkbox, Form, Input, Select } from "antd";
import "./contact.css";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

const Contact = () => {
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      className="contact-page"
    >
      <img style={{marginLeft: 130}} src="./topbar.png" alt="" />
      
      <div className="form-props">
        <div className="total-three-points">
          <div className="first-three-point">
            <p>Name</p>
            <Form.Item>
              <Input className="input input-name" />
            </Form.Item>
            <p>Phone Number</p>
            <Form.Item>
              <Input className="input input-phone-number" />
            </Form.Item>
            <p>Country</p>
            <Form.Item>
              <Select
                showSearch
                placeholder="Select"
                optionFilterProp="children"
                className="input input-select"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  {
                    value: "turkey",
                    label: "Turkey",
                  },
                  {
                    value: "england",
                    label: "England",
                  },
                  {
                    value: "germany",
                    label: "Germany",
                  },
                  {
                    value: "france",
                    label: "France",
                  },
                  {
                    value: "italy",
                    label: "Italy",
                  },
                ]}
              />
            </Form.Item>
          </div>
          <div className="second-three-point">
            <p>Business Email</p>
            <Form.Item>
              <Input className="input input-business-email" />
            </Form.Item>
            <div className="business-title">
              <p>Business Title</p>
              <p className="optional">Optional</p>
            </div>
            <Form.Item>
              <Input className="input input-business-title" />
            </Form.Item>
            <p>Company</p>
            <Form.Item>
              <Input className="input input-company" />
            </Form.Item>
          </div>
        </div>
        <p>Tell us more about your project</p>
        <Form.Item>
          <textarea className="textarea" style={{ maxWidth: 865, minWidth: 315, minHeight: 30 }} />
        </Form.Item>
        <div className="cookies-and-button">
          <Form.Item name="accept-cookies" valuePropName="checked">
            <Checkbox style={{ width: 865 }}>
              I have read the <a href="https://careers.q.agency/privacy-policy">
                Privacy Policy
              </a> and confirm that Quick and Quality Coding and Software my personal
              details to be able to process my project idea.
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button>Submit</Button>
          </Form.Item>
        </div>
      </div>
      <img style={{ margin: 0, marginLeft: 130 }} className="lowerbar" src="./lowerbar.png" alt="" />
    </Form>
  );
};

export default Contact;
