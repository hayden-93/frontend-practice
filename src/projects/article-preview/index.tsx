import { Avatar, Card, UserProfile } from "./components";

export function ArticlePreview() {
  return (
    <section className="bg-article-light-grayish-blue ">
      <Card>
        <Card.Image src="/article-preview/drawers.jpg" alt="Image of Drawers" />
        <section className="space-y-2">
          <Card.Heading>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </Card.Heading>
          <Card.Description>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've
            got some simple tips to help you make any room feel complete.
          </Card.Description>
        </section>
        <UserProfile className="flex space-x-6">
          <Avatar src="/article-preview/avatar-michelle.jpg" alt="Image of Michelle" />
          <div>
            <UserProfile.Name>Michelle Appleton</UserProfile.Name>
            <span className="">28 Jun 2020</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" className="border">
            <path
              fill="#6E8098"
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
          </svg>
        </UserProfile>
      </Card>
    </section>
  );
}
