import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import {useLocale, useTranslations } from 'next-intl'
import { Link } from "@/i18n/routing"
import LocalSelect from "./LocalSelect"
import Image from "next/image"

const Header = () => {
  const t = useTranslations('Header');
  const locale = useLocale()
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/10mslogo-svg.svg"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">{t('home')}</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">{t('about')}</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">{t('contact')}</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <LocalSelect defaultValue={locale} />
            <Button variant="outline">{t('login')}</Button>
            <Button>{t('signup')}</Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-4">
                  <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                  <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
                  
                  <Button variant="outline" className="w-full">{t('login')}</Button>
                  <Button className="w-full">{t('signup')}</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

